import React, { useState, useEffect } from 'react';
import * as api from '../services/api';
import AssetTree from '../components/AssetTree';

const ConfigPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Field' | 'Cluster' | 'Asset'>('Field');
  const [formData, setFormData] = useState<any>({});
  const [assets, setAssets] = useState<api.Asset[]>([]);
  const [utilityTypes, setUtilityTypes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string, type: 'error' | 'success' } | null>(null);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    try {
      const [assetsData, utilsData] = await Promise.all([
        api.getAssets(),
        api.getUtilityTypes()
      ]);
      setAssets(assetsData);
      setUtilityTypes(utilsData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCreate = async (utilityTypeName: string, parentIdField?: string) => {
    setIsLoading(true);
    setMessage(null);
    try {
      await api.createAsset({
        name: formData.name,
        utilityTypeName: utilityTypeName,
        parentAssetId: parentIdField && formData[parentIdField] ? parseInt(formData[parentIdField]) : undefined
      });
      setMessage({ text: `${utilityTypeName} created successfully!`, type: 'success' });
      refreshData();
      setFormData({}); // Clear form
    } catch (err: any) {
      console.error("Create Asset Error:", err);
      setMessage({ text: err.message, type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const renderFieldForm = () => (
    <div className="config-form">
      <h3>Create New Field (prev. Plant)</h3>
      <input placeholder="Field Name" value={formData.name || ''} onChange={e => handleInputChange('name', e.target.value)} />
      <h4>PHD Tag Links</h4>
      <input placeholder="BOE Flow Target Tag" onChange={e => handleInputChange('boeTarget', e.target.value)} />
      <input placeholder="GAS Flow Target Tag" onChange={e => handleInputChange('gasTarget', e.target.value)} />
      <input placeholder="OIL Flow Target Tag" onChange={e => handleInputChange('oilTarget', e.target.value)} />
      <input placeholder="WATER Flow Target Tag" onChange={e => handleInputChange('waterTarget', e.target.value)} />
      <button onClick={() => handleCreate('Field')} disabled={isLoading}>Create Field</button>
    </div>
  );

  const renderClusterForm = () => (
    <div className="config-form">
      <h3>Create New Cluster (prev. Area)</h3>
      <label>Parent Field: </label>
      <select value={formData.parentFieldId || ''} onChange={e => handleInputChange('parentFieldId', e.target.value)}>
        <option value="">Select Field</option>
        {assets.filter(a => a.utilityType.name === 'Field').map(f => (
          <option key={f.id} value={f.id}>{f.name}</option>
        ))}
      </select>
      <br />
      <input placeholder="Cluster Name" value={formData.name || ''} onChange={e => handleInputChange('name', e.target.value)} />
      <h4>PHD Tag Links</h4>
      <input placeholder="BOE Flow Actual Tag" onChange={e => handleInputChange('boeActual', e.target.value)} />
      <input placeholder="GAS Flow Actual Tag" onChange={e => handleInputChange('gasActual', e.target.value)} />
      <input placeholder="OIL Flow Actual Tag" onChange={e => handleInputChange('oilActual', e.target.value)} />
      <input placeholder="WATER Flow Actual Tag" onChange={e => handleInputChange('waterActual', e.target.value)} />
      <button onClick={() => handleCreate('Cluster', 'parentFieldId')} disabled={isLoading}>Create Cluster</button>
    </div>
  );

  const renderAssetForm = () => (
    <div className="config-form">
      <h3>Create New Asset</h3>
      <label>Parent Cluster: </label>
      <select value={formData.parentClusterId || ''} onChange={e => handleInputChange('parentClusterId', e.target.value)}>
        <option value="">Select Cluster</option>
        {assets.filter(a => a.utilityType.name === 'Cluster').map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <br />
      <input placeholder="Asset Name" value={formData.name || ''} onChange={e => handleInputChange('name', e.target.value)} />
      <select value={formData.type || ''} onChange={e => handleInputChange('type', e.target.value)}>
        <option value="" disabled>Select Asset Type</option>
        {utilityTypes
          .filter(t => ['Well', 'Pipeline'].includes(t.name))
          .map(t => <option key={t.id} value={t.name}>{t.name}</option>)
        }
      </select>
      <h4>PHD Tag Links</h4>
      <input placeholder="BOE Flow Actual Tag" onChange={e => handleInputChange('boeActual', e.target.value)} />
      <input placeholder="GAS Flow Actual Tag" onChange={e => handleInputChange('gasActual', e.target.value)} />
      <input placeholder="OIL Flow Actual Tag" onChange={e => handleInputChange('oilActual', e.target.value)} />
      <input placeholder="WATER Flow Actual Tag" onChange={e => handleInputChange('waterActual', e.target.value)} />
      <button onClick={() => handleCreate(formData.type || 'Well', 'parentClusterId')} disabled={isLoading}>Create Asset</button>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Configuration Models</h1>
      
      {message && (
        <div style={{ padding: '10px', marginBottom: '10px', backgroundColor: message.type === 'error' ? '#ffcccc' : '#ccffcc' }}>
          {message.text}
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('Field')}>Field</button>
        <button onClick={() => setActiveTab('Cluster')}>Cluster</button>
        <button onClick={() => setActiveTab('Asset')}>Asset</button>
      </div>
      
      {activeTab === 'Field' && renderFieldForm()}
      {activeTab === 'Cluster' && renderClusterForm()}
      {activeTab === 'Asset' && renderAssetForm()}

      <div style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
        <h3>Existing Assets Hierarchy</h3>
        <AssetTree assets={assets} />
      </div>
    </div>
  );
};

export default ConfigPage;
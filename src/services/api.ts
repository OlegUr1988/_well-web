const API_URL = 'http://localhost:3000/api';

export interface AssetData {
  name: string;
  utilityTypeName: string;
  parentAssetId?: number;
}

export interface UtilityType {
  id: number;
  name: string;
  description: string | null;
}

export interface Asset {
  id: number;
  name: string;
  parentAssetId: number | null;
  utilityTypeId: number;
  utilityType: UtilityType;
}

export const getUtilityTypes = async () => {
  const response = await fetch(`${API_URL}/utility-types`);
  if (!response.ok) throw new Error('Failed to fetch utility types');
  return response.json();
};

export const getAssets = async (): Promise<Asset[]> => {
  const response = await fetch(`${API_URL}/assets`);
  if (!response.ok) throw new Error('Failed to fetch assets');
  return response.json();
};

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'x-auth-token': token || ''
  };
};

export const createAsset = async (data: AssetData) => {
  const response = await fetch(`${API_URL}/assets`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create asset');
  }

  return response.json();
};

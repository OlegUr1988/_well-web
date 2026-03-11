import React, { useMemo } from 'react';
import { Asset } from '../services/api';

interface AssetTreeProps {
  assets: Asset[];
}

interface TreeNode extends Asset {
  children: TreeNode[];
}

const buildTree = (assets: Asset[]): TreeNode[] => {
  const assetMap: Record<number, TreeNode> = {};
  const roots: TreeNode[] = [];

  // Initialize map
  assets.forEach(a => {
    assetMap[a.id] = { ...a, children: [] };
  });

  // Build hierarchy
  assets.forEach(a => {
    if (a.parentAssetId && assetMap[a.parentAssetId]) {
      assetMap[a.parentAssetId].children.push(assetMap[a.id]);
    } else {
      roots.push(assetMap[a.id]);
    }
  });

  return roots;
};

const TreeNodeView: React.FC<{ node: TreeNode, level?: number }> = ({ node, level = 0 }) => {
  return (
    <div style={{ marginLeft: '20px', borderLeft: '1px solid #ddd', paddingLeft: '10px', marginTop: '5px' }}>
      <div style={{ fontWeight: level === 0 ? 'bold' : 'normal' }}>
        <span style={{ color: '#666', fontSize: '0.9em' }}>[{node.utilityType.name}]</span> {node.name}
      </div>
      {node.children.map(child => (
        <TreeNodeView key={child.id} node={child} level={level + 1} />
      ))}
    </div>
  );
};

const AssetTree: React.FC<AssetTreeProps> = ({ assets }) => {
  const tree = useMemo(() => buildTree(assets), [assets]);

  return (
    <div style={{ fontFamily: 'monospace' }}>
      {tree.map(root => (
        <TreeNodeView key={root.id} node={root} />
      ))}
    </div>
  );
};

export default AssetTree;
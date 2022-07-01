// 实现 findTreeNode

var data = [{
  title: 'topNode',
  children: [
    {
      title: 'node1',
      children: [
        {
          title: 'randomNode_1'
        },
        {
          title: 'node2',
          children: [
            {
              title: 'randomNode_2',
              children: [
                {
                  title: 'node3',
                  children: [
                    {
                      title: 'randomNode_3',
                    }]
                }
              ]
            }]
        }]
    }
  ]
}];

function findTreeNode(tree, node) {
  if (tree.title === node) {
    return tree
  }

  if (tree.children) {
    let result = null
    for (let i = 0; i < tree.children.length && result == null; i++) {
      tree.title
      result = findTreeNode(tree.children[i], node)
    }
    return result
  }
  return null
}

findTreeNode(data[0], 'randomNode_1')
/**
 * 格式化树形结构
 * @param data 后端返回的树形结构
 * @returns 级联选择器需要的树形结构
 */
export function formatTreeData(data: any[]): any {
  return data.map((item: any) => {
    return {
      label: item.name,
      value: item.id,
      children: item.children.length > 0 ? formatTreeData(item.children) : null,
    };
  });
}

/**
 * 根据value值去获取label
 * @param val 值
 * @param values 选项组
 * @returns label
 */
export function formatLabel(val: any, values: any[]) {
  return (
    values.find((item) => String(item.value) === String(val))?.label || '-'
  );
}

export default {};

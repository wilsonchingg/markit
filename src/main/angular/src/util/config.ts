// Combine default datatable config with custom datatable config
const dtOptions = (overrideConfig) => {
  const _dtOptions = {
    pagingType: 'full_numbers',
    bPaginate: false,
    bInfo: false,  // Disable table footer
    lengthChange: false,
    columnDefs: [{ orderable: false, targets: 0 }, { orderable: false, targets: 1 },
      { orderable: false, targets: 2 },  { orderable: false, targets: 3 },
      { orderable: false, targets: 4 },  { orderable: false, targets: 5 }],
    order: [[0, 'asc']],
  };
  return Object.assign(_dtOptions, overrideConfig || {});
};

export { dtOptions };

export const Category = [
  { id: 0, name: 'General' },
  { id: 1, name: 'Kitchen' },
];

export const AmenitiesList = [
  { id: 0, categoryId: 0, name: 'Wifi', icon: '' },
  { id: 1, categoryId: 0, name: 'Ti vi', icon: '' },
  { id: 2, categoryId: 0, name: 'Máy nước nóng', icon: '' },
  { id: 3, categoryId: 0, name: 'Máy lạnh', icon: '' },

  { id: 4, categoryId: 1, name: 'Lò vi sóng', icon: '' },
  { id: 5, categoryId: 1, name: 'Bếp điện', icon: '' },
  { id: 6, categoryId: 1, name: 'Bát đĩa', icon: '' },
];

/* export const AmenitiesGroup = Category.map(category => {
  return AmenitiesList.filter(item => item.categoryId === category.id);
}); */

/* export const AmenitiesList = {
  General: [
    { id: 0, name: 'Wifi', icon: '' },
    { id: 1, name: 'Ti vi', icon: '' },
    { id: 2, name: 'Máy nước nóng', icon: '' },
    { id: 3, name: 'Máy lạnh', icon: '' },
  ],
  Kitchen: [
    { id: 4, name: 'Lò vi sóng', icon: '' },
    { id: 5, name: 'Bếp điện', icon: '' },
    { id: 6, name: 'Bát đĩa', icon: '' },
  ],
}; */

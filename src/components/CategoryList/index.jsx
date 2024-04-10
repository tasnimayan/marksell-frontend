// components/CategoryList.js
const categories = [
  { id: 1, name: 'Electronics', imageUrl: '/icons/electronics.png' },
  { id: 2, name: 'Furniture', imageUrl: '/icons/furniture.png' },
  { id: 3, name: 'Clothing', imageUrl: '/icons/clothing.png' },
  { id: 4, name: 'Books', imageUrl: '/icons/books.png' },
  { id: 5, name: 'Gaming', imageUrl: '/icons/gaming.png' },
  { id: 6, name: 'Sports', imageUrl: '/icons/sports.png' },
  { id: 7, name: 'Outdoor', imageUrl: '/icons/outdoor.png' },
  { id: 8, name: 'Other', imageUrl: '/icons/other.png' },
  // Add more categories as needed
];

const CategoryList = () => {
  return (
    <div className=" px-4">
      <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
        {categories.map((category) => (
          <div key={category.id} className="p-2">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center shadow">
              <img src={category.imageUrl} alt={category.name} className="w-16 h-16 mb-2"/>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

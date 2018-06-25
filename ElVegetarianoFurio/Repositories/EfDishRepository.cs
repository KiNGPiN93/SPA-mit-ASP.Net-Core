using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElVegetarianoFurio.Models;

namespace ElVegetarianoFurio.Repositories
{
    public class EfDishRepository : IDishRepository
    {
        private readonly VegiContext _db;

        public EfDishRepository(VegiContext db)
        {
            _db = db;
        }

        public Dish CreateDish(Dish dish)
        {
            _db.Dishes.Add(dish);
            _db.SaveChanges();
            return dish;
        }

        public void DeleteDish(int id)
        {
            var dish = _db.Dishes.Find(id);
            if(dish != null)
            {
                _db.Dishes.Remove(dish);
                _db.SaveChanges();
            }
        }

        public Dish GetDishById(int id)
        {
            return _db.Dishes.Find(id);
        }

        public IEnumerable<Dish> GetDishes()
        {
            return _db.Dishes;
        }

        public Dish UpdateDish(Dish dish)
        {
            var dishToUpdate = _db.Dishes.Find(dish.Id);
            dishToUpdate.Name = dish.Name;
            dishToUpdate.Description = dish.Description;
            dishToUpdate.Price = dish.Price;
            dishToUpdate.CategoryId = dish.CategoryId;
            _db.SaveChanges();
            return dishToUpdate;
        }
    }
}

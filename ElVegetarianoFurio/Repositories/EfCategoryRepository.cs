using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElVegetarianoFurio.Models;
using Microsoft.EntityFrameworkCore;

namespace ElVegetarianoFurio.Repositories
{
    public class EfCategoryRepository : ICategoryRepository
    {
        private readonly VegiContext _db;

        public EfCategoryRepository(VegiContext db)
        {
            _db = db;
        }
        public Category CreateCategory(Category category)
        {
            _db.Categories.Add(category);
            _db.SaveChanges();
            return category;
        }

        public void DeleteCategory(int id)
        {
            var category = _db.Categories.Find(id);
            if(category != null)
            {
                _db.Categories.Remove(category);
                _db.SaveChanges();
            }
        }

        public Category GetCategoryById(int id)
        {
            return _db.Categories.Find(id);
        }

        public IEnumerable<Category> GetCategories()
        {
            return _db.Categories.Include(x => x.Dishes);
        }

        public Category UpdateCategory(Category category)
        {
            var categoryToUpdate = _db.Categories.Find(category.Id);
            categoryToUpdate.Name = category.Name;
            categoryToUpdate.Description = category.Description;
            _db.SaveChanges();
            return categoryToUpdate;
        }
    }
}

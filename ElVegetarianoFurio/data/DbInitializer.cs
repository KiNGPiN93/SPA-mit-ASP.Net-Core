using ElVegetarianoFurio.Models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ElVegetarianoFurio.data
{
    public class DbInitializer
    {
        public static void Initialize(VegiContext db, IHostingEnvironment env)
        {
            db.Database.EnsureCreated();
            if(db.Categories.Any() || db.Dishes.Any())
            {
                return;
            }

            var path = Path.Combine(env.ContentRootPath, "data");
            var dishesJson = File.ReadAllText(Path.Combine(path, "dishes.json"));
            var categoriesJson = File.ReadAllText(Path.Combine(path, "categories.json"));

            var dishes = JsonConvert.DeserializeObject<List<Dish>>(dishesJson);
            var categories = JsonConvert.DeserializeObject<List<Category>>(categoriesJson);

            foreach (var category in categories)
            {
                foreach (var dish in dishes.Where(x => x.CategoryId == category.Id))
                {
                    dish.Id = 0;
                    category.Dishes.Add(dish);
                }
                category.Id = 0;
                db.Categories.Add(category);
            }
            db.SaveChanges();
        }
    }
}

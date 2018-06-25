using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElVegetarianoFurio.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using Newtonsoft.Json;

namespace ElVegetarianoFurio.Repositories
{
    public class FileDishRepository : IDishRepository
    {
        private readonly string _path;
        public FileDishRepository(IHostingEnvironment env)
        {
            _path = Path.Combine(env.ContentRootPath, "data", "dishes.json");
        }

        public Dish CreateDish(Dish dish)
        {
            dish.Id = 99;
            return dish;
        }

        public void DeleteDish(int id)
        {
           
        }

        public Dish GetDishById(int id)
        {
            return GetDishes()?.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Dish> GetDishes()
        {
            var json = File.ReadAllText(_path);
            return JsonConvert.DeserializeObject<IEnumerable<Dish>>(json);
        }

        public Dish UpdateDish(Dish dish)
        {
            return dish;
        }
    }
}

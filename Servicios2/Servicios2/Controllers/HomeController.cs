using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Servicios2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your cdontact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
        public IActionResult Estrategia()
        {
            return View("Estrategia");
        }

        public IActionResult Cmr()
        {
            return View("Cmr");
        }
        public IActionResult Mix()
        {
            return View("Mix");
        }
        public IActionResult Innovacion()
        {
            return View("Innovacion");
        }
        public IActionResult Shopper()
        {
            return View("Shopper");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Servicios2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index(string url="Home/Home")
        {
            ViewBag.DataCallUrl = url;
            return View();
        }
        
        public IActionResult Home()
        {
            return PartialView();
        }

        public IActionResult About()
        {
            
            return PartialView();
        }

        public IActionResult Contact()
        {
           
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
        public IActionResult Estrategia()
        {
            return PartialView("Estrategia");
        }

        public IActionResult Cmr()
        {
            return PartialView("Cmr");
        }

        public IActionResult Mix()
        {
            return PartialView("Mix");
        }

        public IActionResult Innovacion()
        {
            return PartialView("Innovacion");
        }

        public IActionResult Shopper()
        {
            return PartialView("Shopper");
        }

        public IActionResult Neuromarketing()
        {
            return PartialView("Neuromarketing");
        }

        public IActionResult Articuloblog()
        {
            return PartialView("Articuloblog");
        }

        public IActionResult DirectorioBlog()
        {
            return PartialView("DirectorioBlog");
        }

        public IActionResult Equipo()
        {
            return PartialView("Equipo");
        }

        public IActionResult ComoFunciona()
        {
            return PartialView("ComoFunciona");
        }
    }
}

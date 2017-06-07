using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public void AjaxMethod(string FirstName, string LastName)
        {

            var userData = "Firstname: " + FirstName + "," + "Lastname: " + LastName + Environment.NewLine;

            var dataFile = Server.MapPath("~/App_Data/data.txt");

            System.IO.File.AppendAllText(dataFile, userData);

        }
    }
}
using System;
using System.ComponentModel.DataAnnotations;
namespace ThreeRazorPagesUI.Models
{
    public class GodModel
    {
        public string Title { get; set; }
        public string ReleaseDate { get; set; }
        public string Genre { get; set; }
        public string Price { get; set; }
    }
}

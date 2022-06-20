using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ThreeRazorPagesUI.Models;

namespace ThreeRazorPagesUI
{
    public class AddGodModel : PageModel
    {
        [BindProperty]
        public GodModel Head { get; set; }

        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            if (ModelState.IsValid == false)
            {
                return Page();
            }

            //Save model to database
            return RedirectToPage("/Index", new { Head.Title });
        }
    }
}

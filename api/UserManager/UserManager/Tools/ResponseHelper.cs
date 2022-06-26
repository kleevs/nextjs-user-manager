using System.Text.Json;
using UserManager.Endpoints;

namespace UserManager.Tools
{
    public class ResponseHelper
    {
        private readonly HttpContext _context;

        public ResponseHelper(HttpContext context)
        {
            _context = context;
        }

        public void AddClaim(IClaim claim) 
        {
            _context.Response.Cookies.Append("auth", JsonSerializer.Serialize(claim));
        } 
    }
}

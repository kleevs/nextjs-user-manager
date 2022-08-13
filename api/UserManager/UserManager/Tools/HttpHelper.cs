using System.Text.Json;
using UserManager.Models;

namespace UserManager.Tools
{
    public class HttpHelper
    {
        private record User(string Login) : IClaim, IUser;
        private readonly HttpContext _context;

        public HttpHelper(HttpContext context)
        {
            _context = context;
        }

        public void AddClaim(IClaim claim) 
        {
            _context.Response.Cookies.Append("auth", JsonSerializer.Serialize(claim));
        }

        public IUser GetConnectedUser()
        {
            if (_context.Request.Cookies.ContainsKey("auth")) 
            {
                return JsonSerializer.Deserialize<User>(_context.Request.Cookies["auth"]);
            }

            return null;
        }
    }
}

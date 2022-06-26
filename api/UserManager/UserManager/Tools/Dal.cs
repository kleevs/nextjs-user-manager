using UserManager.Endpoints;

namespace UserManager.Tools
{
    public static class Dal
    {
        record User(string Login, string Password): IUser;

        private static readonly List<IUser> _dbContext = new ()
        {
            new User("test", "1234")
        };

        public static IUser GetUserByLogin(string login, string password) 
        {
            return _dbContext!.Where(u => u.Login == login && u.Password == password).FirstOrDefault();
        }

        public static IEnumerable<IUser> GetUsers()
        {
            return _dbContext.ToArray();
        }
    }
}

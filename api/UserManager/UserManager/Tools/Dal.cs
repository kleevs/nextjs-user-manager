using UserManager.Models;

namespace UserManager.Tools
{
    public static class Dal
    {
        record User(string Login, string Password): IUserFull;

        private static readonly List<IUserFull> _dbContext = new ()
        {
            new User("test", "1234")
        };

        public static IUserFull GetUserByLoginAndPassword(string login, string password) 
        {
            return _dbContext.Where(u => u.Login == login && u.Password == password).FirstOrDefault();
        }

        public static IUserFull GetUserByLogin(string login)
        {
            return _dbContext.Where(u => u.Login == login).FirstOrDefault();
        }

        public static bool IsUserExist(string login)
        {
            return GetUserByLogin(login) != null;
        }

        public static IEnumerable<IUserFull> GetUsers()
        {
            return _dbContext.ToArray();
        }

        public static void RemoveUser(string login)
        {
            if (_dbContext.Any(u => u.Login == login))
            {
                _dbContext.Remove(_dbContext.Where(u => u.Login == login).First());
            }
        }

        public static void CreateUser(IUserFull user)
        {
            if (!_dbContext.Any(u => u.Login == user.Login))
            {
                _dbContext.Add(user);
            } 
        }

        public static void UpdateUser(IUserFull user)
        {
            var usr = _dbContext.FirstOrDefault(u => u.Login == user.Login);
            if (usr == null)
            {
                _dbContext.Remove(usr!);
                _dbContext.Add(user);
            }
        }
    }
}

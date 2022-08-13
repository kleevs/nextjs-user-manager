namespace UserManager.Models;

public interface IUserFull : IUser
{
    string Password { get; }
}

public interface IUser
{
    string Login { get; }
}
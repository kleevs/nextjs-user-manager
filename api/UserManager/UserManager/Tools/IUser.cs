namespace UserManager.Tools;

public interface IUserFull : IUser
{
    string Password { get; }
}

public interface IUser
{
    string Login { get; }
}
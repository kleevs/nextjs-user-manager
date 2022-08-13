using UserManager.Models;

namespace UserManager.Manager;

class CreateUser
{
    public delegate void SaveNewUser(IUserFull user);
    public delegate void UpdateUser(IUserFull user);
    public delegate IUser GetUser(string login);
    public delegate void IsUserExist(string login);
    private readonly SaveNewUser _createUser;
    private readonly UpdateUser _updateUser;
    private readonly GetUser _getUser;

    public CreateUser(SaveNewUser createUser, UpdateUser updateUser, GetUser getUser)
    {
        _createUser = createUser;
        _updateUser = updateUser;
        _getUser = getUser;
    }

    public void Execute(IUserFull user)
    {
        if (user == null) 
        {
            throw new ArgumentNullException(nameof(user));
        }

        if (string.IsNullOrEmpty(user.Login)) 
        {
            throw new ArgumentNullException(nameof(user.Login));
        }

        if (string.IsNullOrEmpty(user.Password))
        {
            throw new ArgumentNullException(nameof(user.Password));
        }

        if (_getUser(user.Login) != null) 
        {
            _updateUser(user);
        } 
        else 
        {
            _createUser(user);
        }
    }
}


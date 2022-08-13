using UserManager.Models;

namespace UserManager.Authentication;

class Signin
{
    public delegate IUserFull UsersQuery(string login, string password);
    public delegate void ClaimRegister(IClaim claim);
    private record Claim(string Login) : IClaim;

    private readonly UsersQuery _usersQuery;
    private readonly ClaimRegister _claimRegister;

    public Signin(UsersQuery usersQuery, ClaimRegister claimRegister)
    {
        _usersQuery = usersQuery;
        _claimRegister = claimRegister;
    }

    public string Execute(string login, string password)
    {
        var user = _usersQuery(login, password);
        if (user != null)
        {
            _claimRegister(new Claim(user.Login));
            return user.Login;
        }

        return string.Empty;
    }
}


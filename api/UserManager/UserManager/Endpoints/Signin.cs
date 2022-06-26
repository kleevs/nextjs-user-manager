namespace UserManager.Endpoints;

public interface IUser
{
    public string Login { get; }
    public string Password { get; }
}

public interface IClaim
{
    public string Login { get; }
}

class Signin
{
    public delegate IUser UsersQuery(string login, string password);
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


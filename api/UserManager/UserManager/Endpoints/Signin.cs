namespace UserManager.Endpoints;

public interface IUser
{
    public string Login { get; }
}

public interface IClaim : IUser
{
}

internal record Claim(string Login) : IClaim
{
}

public interface IUsersQuery 
{
    IUser GetUser(string login, string password);
}

public interface IHttpContext
{
    void AddCookie(IClaim claim);
}

class Signin
{
    private readonly IUsersQuery _usersQuery;
    private readonly IHttpContext _httpContext;

    public Signin(IUsersQuery usersQuery, IHttpContext httpContext)
    {
        _usersQuery = usersQuery;
        _httpContext = httpContext;
    }

    public string Execute(string login, string password) 
    {
        var user = _usersQuery.GetUser(login, password);
        _httpContext.AddCookie(new Claim(user.Login));
        return user.Login;
    }
}


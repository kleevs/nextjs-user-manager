using UserManager.Tools;

namespace UserManager.Authentication;

static class EndpointRouteBuilderExtensions 
{
    internal record AuthTokenBodyRequest(string Client, string Secret, string Code);

    public static IEndpointRouteBuilder UseUserAuthentication(this IEndpointRouteBuilder app) 
    {
        app.MapGet("/signin", (HttpContext context, string login, string password) =>
            new Signin(Dal.GetUserByLoginAndPassword, new HttpHelper(context).AddClaim).Execute(login, password));
        app.MapPost("/code_grant/auth", (HttpContext context, string state, string client) =>
            new AuthorizationCode(DateProvider.Now, Crypto.Crypt).Execute(new HttpHelper(context).GetConnectedUser(), state, client));
        app.MapPost("/code_grant/token", (AuthTokenBodyRequest request) => new AuthorizationToken(DateProvider.Now, DateProvider.Parse, Crypto.Crypt, Crypto.Decrypt).Execute(request.Code));
        app.MapGet("/implicit_grant/token", (HttpContext context) => new ImplicitGrantToken(DateProvider.Now, Crypto.Crypt).Execute(new HttpHelper(context).GetConnectedUser()));

        return app;
    }
}

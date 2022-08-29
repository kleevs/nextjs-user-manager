using UserManager.Tools;

namespace UserManager.Manager;

static class EndpointRouteBuilderExtensions 
{
    internal record UserBodyRequest(string Password);
    internal record User(string Login, string Password) : IUserFull;

    public static IEndpointRouteBuilder UseManager(this IEndpointRouteBuilder app) 
    {
        app.MapGet("/users", () => Dal.GetUsers());
        app.MapPut("/users/{login}", (string login, UserBodyRequest body) =>
            new CreateUser(Dal.CreateUser, Dal.UpdateUser, Dal.GetUserByLogin).Execute(new User(login, body.Password)));
        app.MapPost("/users/{login}", (string login, UserBodyRequest body) =>
            new CreateUser(Dal.CreateUser, Dal.UpdateUser, Dal.GetUserByLogin).Execute(new User(login, body.Password)));
        app.MapDelete("/users/{login}", (string login) => Dal.RemoveUser(login));

        return app;
    }
}

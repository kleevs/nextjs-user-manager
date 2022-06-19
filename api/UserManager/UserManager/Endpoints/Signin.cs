namespace UserManager.Endpoints;

internal record Claim(string Login)
{
}

class Signin
{
    public string Execute() 
    {
        var claim = new Claim("");
        return "ok";
    }
}


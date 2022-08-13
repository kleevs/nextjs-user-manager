using UserManager.Models;

namespace UserManager.Authentication;

class AuthorizationCode
{
    public delegate string Crypt(string text);
    record AuthCode(string Code) : IAuthCode;
    private readonly Crypt _crypt;

    public AuthorizationCode(Crypt crypt)
    {
        _crypt = crypt;
    }

    public IAuthCode Execute(IUser connectedUser, string state, string client, string redirect)
    {
        if (connectedUser == null) 
        {
            throw new UnauthorizedAccessException();
        }

        var code = _crypt($"{state}|{client}|{connectedUser.Login}");

        return new AuthCode(code);
    }
}


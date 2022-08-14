using UserManager.Models;

namespace UserManager.Authentication;

class AuthorizationCode
{
    public delegate DateTime DateNow();
    public delegate string Crypt(string text);
    record AuthCode(string Code) : IAuthCode;
    private readonly Crypt _crypt;
    private readonly DateNow _dateNow;

    public AuthorizationCode(DateNow dateNow, Crypt crypt)
    {
        _crypt = crypt;
        _dateNow = dateNow;
    }

    public IAuthCode Execute(IUser connectedUser, string state, string client)
    {
        if (connectedUser == null) 
        {
            throw new UnauthorizedAccessException();
        }

        var code = _crypt($"{_dateNow()}|{state}|{client}|{connectedUser.Login}");

        return new AuthCode(code);
    }
}


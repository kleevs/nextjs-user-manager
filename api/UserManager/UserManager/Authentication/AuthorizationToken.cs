using UserManager.Models;

namespace UserManager.Authentication;

class AuthorizationToken
{
    public delegate DateTime DateNow();
    public delegate string Crypt(string text);
    record AuthToken(string Token) : IAuthToken;

    private readonly DateNow _dateNow;
    private readonly Crypt _crypt;
    private readonly Crypt _decrypt;

    public AuthorizationToken(DateNow dateNow, Crypt crypt, Crypt decrypt)
    {
        _dateNow = dateNow;
        _crypt = crypt;
        _decrypt = decrypt;
    }

    public IAuthToken Execute(string authCode)
    {
        if (string.IsNullOrWhiteSpace(authCode)) 
        {
            throw new UnauthorizedAccessException();
        }

        var splitted = _decrypt(authCode).Split('|');
        var state = splitted[0];
        var client = splitted[1];
        var user = splitted[2];
        var date = _dateNow();

        var token = _crypt($"{date}|{user}");

        return new AuthToken(token);
    }
}


using UserManager.Models;

namespace UserManager.Authentication;

class AuthorizationToken
{
    public delegate DateTime DateNow();
    public delegate DateTime DateParser(string date);
    public delegate string Crypt(string text);
    record AuthToken(string Token) : IAuthToken;

    private readonly DateNow _dateNow;
    private readonly DateParser _parser;
    private readonly Crypt _crypt;
    private readonly Crypt _decrypt;

    public AuthorizationToken(DateNow dateNow, DateParser parser, Crypt crypt, Crypt decrypt)
    {
        _dateNow = dateNow;
        _crypt = crypt;
        _decrypt = decrypt;
        _parser = parser;
    }

    public IAuthToken Execute(string authCode)
    {
        if (string.IsNullOrWhiteSpace(authCode)) 
        {
            throw new UnauthorizedAccessException();
        }

        var splitted = _decrypt(authCode).Split('|');

        if (splitted.Length < 4) 
        {
            throw new UnauthorizedAccessException();
        }

        var authCodeDate = _parser(splitted[0]);
        var state = splitted[1];
        var client = splitted[2];
        var user = splitted[3];
        var date = _dateNow();

        var token = _crypt($"{date}|{user}");

        return new AuthToken(token);
    }
}


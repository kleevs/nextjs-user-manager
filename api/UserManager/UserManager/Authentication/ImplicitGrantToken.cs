using UserManager.Models;

namespace UserManager.Authentication;

class ImplicitGrantToken
{
    public delegate DateTime DateNow();
    public delegate string Crypt(string text);
    record AuthToken(string Token) : IAuthToken;
    private readonly DateNow _dateNow;
    private readonly Crypt _crypt;

    public ImplicitGrantToken(DateNow dateNow, Crypt crypt)
    {
        _dateNow = dateNow;
        _crypt = crypt;
    }

    public IAuthToken Execute(IUser connectedUser)
    {
        if (connectedUser == null) 
        {
            throw new UnauthorizedAccessException();
        }

        var date = _dateNow();
        var token = _crypt($"{date}|{connectedUser.Login}");

        return new AuthToken(token);
    }
}


using UserManager.Tools;

namespace UserManager.Authentication;

class AuthorizationCode
{
    public delegate DateTime DateNow();
    public delegate string Crypt(string text);
    private readonly Crypt _crypt;
    private readonly DateNow _dateNow;
    record AuthCode(string Code) : IAuthCode;
    public interface IAuthCode
    {
        public string Code { get; }
    }

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


namespace UserManager.Tools
{
    public class DateProvider
    {
        public static DateTime Now() => DateTime.UtcNow;
        public static DateTime Parse(string date) => DateTime.UtcNow;
    }
}

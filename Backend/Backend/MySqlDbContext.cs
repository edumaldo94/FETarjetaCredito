
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading;

namespace Backend
{
    public class MySqlDbContext : DbContext
    {

        public DbSet<TarjetaCredito> TarjetaCredito { get; set; }  

        public MySqlDbContext(DbContextOptions<MySqlDbContext> options)
            : base(options)
        {
        }

     
    }
}

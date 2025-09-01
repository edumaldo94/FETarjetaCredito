
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend
{
    public class AplicationDbContext: DbContext
    {
        public DbSet<TarjetaCredito> TarjetaCredito { get; set; }
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {
        }
    

    }
}

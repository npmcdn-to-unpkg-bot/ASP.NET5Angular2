using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AppRun.Models.Entities;

namespace AppRun.Models.Concrete
{
    public class EFDbContext : DbContext
    {
        DbSet<User> Users { get; set; }

        public EFDbContext (DbContextOptions<EFDbContext> options)
            : base(options) { }
    }
}

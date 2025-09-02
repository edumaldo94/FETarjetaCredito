using Backend;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DevConnection");
var mySqlConnection = builder.Configuration.GetConnectionString("MySqlConnection");

// Add services to the container.
// Add services to the container.
builder.Services.AddControllers();

// Registrar DbContext SQL Server
builder.Services.AddDbContext<AplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

// Registrar DbContext MySQL
builder.Services.AddDbContext<MySqlDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("MySqlConnection"),
        new MySqlServerVersion(new Version(8, 0, 34)), // Ajusta versión
        mysqlOptions => mysqlOptions.EnableRetryOnFailure()
    )
);

// Habilitar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200")  // Angular dev server
                       .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
// Usar CORS
app.UseCors("AllowAngularDev");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

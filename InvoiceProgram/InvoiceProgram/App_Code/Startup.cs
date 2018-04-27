using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(InvoiceProgram.Startup))]
namespace InvoiceProgram
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}

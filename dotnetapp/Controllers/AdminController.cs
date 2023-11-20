using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{

    
[ApiController]
[Route("/[Controller]")]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        //[Route("ListPlayers")]
        public IActionResult GetPlayers()
        {
             var data=_context.Players.ToList();
             return Ok(data);
        }
        [HttpGet]
        [Route("ListTeams")]
        public IActionResult GetTeams()
        {
             var data=_context.Teams.ToList();
             return Ok(data);
        }
        [HttpPut]
    //    [Route("EditPlayer/{id}")]
    public IActionResult PutPlayer(int id,Player editedPlayer)
    {
        Player oldPlayer=_context.Players.Find(id);
        oldPlayer.Name=editedPlayer.Name;
        oldPlayer.Age=editedPlayer.Age;
        oldPlayer.Category=editedPlayer.Category;
        oldPlayer.BiddingPrice=editedPlayer.BiddingPrice;
        oldPlayer.TeamId=editedPlayer.TeamId;
        _context.SaveChanges();
        return Ok();
    }
    public 

        

        
    }
}
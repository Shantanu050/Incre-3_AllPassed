﻿using System.Collections.Generic;
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
        [Route("ListPlayers")]
        public IActionResult GetPlayers()
        {
             var data=_context.Players.ToList();
             if(data==null)
             return NotFound();
             return Ok(data);
        }

        [HttpGet]
        [Route("GetPlayer/{id}")]
        public IActionResult GetPlayerById(int id)
        {
            var data=_context.Players.Find(id);
            if(data==null)
            return NotFound();
            return Ok(data);
        }

       
        [HttpPut]
       [Route("EditPlayer/{id}")]
    public IActionResult PutPlayer(int id,Player editedPlayer)
    {
        try{
        Player oldPlayer=_context.Players.Find(id);
        oldPlayer.Name=editedPlayer.Name;
        oldPlayer.Age=editedPlayer.Age;
        oldPlayer.Category=editedPlayer.Category;
        oldPlayer.BiddingPrice=editedPlayer.BiddingPrice;
        oldPlayer.TeamId=editedPlayer.TeamId;
        _context.SaveChanges();
        return Ok();
        }
        catch(Exception e)
        {
            return BadRequest();
        }
    }

    [HttpDelete]
    [Route("DeletePlayer/{id}")]
    public IActionResult DeletePlayer(int id)
    {
        try{
        Player player=_context.Players.Find(id);
       _context.Players.Remove(player);
       _context.SaveChanges();
        return Ok();
        }
        catch(Exception e)
        {
            return BadRequest();
        }
    }

    [HttpPost]
    [Route("AddPlayer")]
    public IActionResult PostPlayer(Player newPlayer)
    {
        if(ModelState.IsValid)
        {
        _context.Players.Add(newPlayer);
        _context.SaveChanges();
        return Created("Player Added",newPlayer);
        }
        return BadRequest("Cannot add Player");
    }

       [HttpGet]
       [Route("ListTeams")]
        public IActionResult GetTeams()
        {
             var data=_context.Teams.ToList();
             if(data==null)
             return NotFound();
             return Ok(data);
        }

        [HttpPost]
        [Route("AddTeam")]
        public IActionResult AddTeam(Team newTeam)
        {
            if(ModelState.IsValid)
            {
            _context.Teams.Add(newTeam);
            _context.SaveChanges();
            return Created("Team added",newTeam);
            }
            return BadRequest("Cannot add team");
        }

        

        
    }
}
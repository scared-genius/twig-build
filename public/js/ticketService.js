const TICKETS_KEY = 'ticketapp_tickets';
function readAll(){ const raw = localStorage.getItem(TICKETS_KEY); return raw ? JSON.parse(raw) : []; }
function writeAll(tickets){ localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets)); }
export async function fetchTickets(){ await new Promise(r=>setTimeout(r,300)); if(Math.random()<0.03){ const err=new Error('Network error'); err.code='NETWORK_ERROR'; throw err;} return readAll(); }
export async function createTicket(ticket){ const tickets = readAll(); const newTicket={ id:'t_'+Date.now(), title:ticket.title, description:ticket.description||'', status:ticket.status, priority:ticket.priority||'medium', createdAt:(new Date()).toISOString(), updatedAt:(new Date()).toISOString(), createdBy:ticket.createdBy||'u_1'}; tickets.unshift(newTicket); writeAll(tickets); return newTicket; }
export async function updateTicket(id, patch){ const tickets = readAll(); const idx = tickets.findIndex(t=>t.id===id); if(idx===-1) throw new Error('Ticket not found'); tickets[idx] = {...tickets[idx], ...patch, updatedAt:(new Date()).toISOString()}; writeAll(tickets); return tickets[idx]; }
export async function deleteTicket(id){ let tickets = readAll(); tickets = tickets.filter(t=>t.id!==id); writeAll(tickets); return true; }

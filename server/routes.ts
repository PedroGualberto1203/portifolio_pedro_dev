import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission API endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }
      
      // In a real-world scenario, this would save to a database or send an email
      console.log('Contact form submission:', { name, email, subject, message });
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully' 
      });
    } catch (error) {
      console.error('Error in contact form submission:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'An error occurred while processing your request' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

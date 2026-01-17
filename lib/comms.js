
// This file handles the Real-Time Voice and SMS logic
import twilio from 'twilio';
import nodemailer from 'nodemailer';

// These will automatically pull from Vercel's Environment Variables
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export const agiCommHub = {
  // 1. The "Wake Up" Call Feature
  initiateVoiceCall: async (to, message) => {
    try {
      const call = await client.calls.create({
        twiml: `<Response><Say voice="Polly.Brian-Neural">${message}</Say></Response>`,
        to: to,
        from: process.env.NEURUS_PHONE
      });
      return { success: true, callSid: call.sid };
    } catch (error) {
      console.error("Voice Call Failed:", error);
      return { success: false, error: error.message };
    }
  },

  // 2. The SMS Bridge
  sendSMS: async (to, body) => {
    try {
      const msg = await client.messages.create({
        body: `[NEURUS AGI]: ${body}`,
        from: process.env.NEURUS_PHONE,
        to: to
      });
      return { success: true, sid: msg.sid };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
};

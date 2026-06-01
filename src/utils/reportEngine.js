const SUPABASE_URL = 'https://ydlbcmpaowgurezrjdgy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkbGJjbXBhb3dndXJlenJqZGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxODUzMzgsImV4cCI6MjA5NTc2MTMzOH0.fnLmMibO9pVKkTd3TdYMvEMEx0KBBfIluT3ZR-GHQXc';

async function getReports() {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/reports`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw new Error(`Fallo al obtener reportes: ${error.message}`);
  }
}

module.exports = { getReports };

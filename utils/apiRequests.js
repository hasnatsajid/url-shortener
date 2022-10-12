const API = process.env.NEXT_PUBLIC_API_URL;

export const sendMail = async (name, email, message) => {
  const req = await fetch(`${API}/sendmail`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': API,
    },
    body: JSON.stringify({ name, email, message }),
  });

  const result = await req.json();
  return result;
};

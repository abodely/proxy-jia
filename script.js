import http from "k6/http";

export const options = {
  vus: 120,
  duration: '10m'
}
export default function() {
  http.get(`http://localhost:8000/homes/${Math.floor(Math.random() * 1e6 + 1)}`);
};
import Login from "./components/login";

export default function Home() {
  return (
		<main className="flex min-full-screen flex-col items-center justify-between p-24">
      <Login/>
			<form action="post">
				<div>
					<label>Patient:</label>
					<input
						type="text"
						name="patient"
						// value={form.patient}
						// onChange={handleChange}
					/>
				</div>
				<div>
					<label>Healthcare Provider:</label>
					<input
						type="text"
						name="healthcareProvider"
						// value={form.healthcareProvider}
						// onChange={handleChange}
					/>
				</div>
				<div>
					<label>Consultation Type:</label>
					<input
						type="text"
						name="consultationType"
						// value={form.consultationType}
						// onChange={handleChange}
					/>
				</div>
				<div>
					<label>Medical Condition:</label>
					<input
						type="text"
						name="medicalCondition"
						// value={form.medicalCondition}
						// onChange={handleChange}
					/>
				</div>
				<div>
					<label>Date:</label>
					<input
						type="date"
						name="date"
						// value={form.date}
						// onChange={handleChange}
					/>
				</div>
				<button type="submit">Create Consultation</button>
			</form>
		</main>
	);
}

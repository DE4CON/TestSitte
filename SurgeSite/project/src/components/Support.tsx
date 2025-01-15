{/* Update the support form state to include file */}
const [supportForm, setSupportForm] = useState({
  discordUsername: '',
  email: '',
  subject: '',
  message: '',
  file: null as File | null
});

{/* Update the form JSX to include Discord username and file upload */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  <div className="relative group">
    <input
      type="text"
      required
      value={supportForm.discordUsername}
      onChange={(e) => setSupportForm(prev => ({ ...prev, discordUsername: e.target.value }))}
      className="w-full px-4 py-3 bg-purple-900/10 border border-purple-500/20 rounded-xl outline-none focus:border-purple-500 transition-colors duration-300 peer"
    />
    <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm">
      Discord Username
    </label>
  </div>
  {/* Rest of the form fields remain the same */}
</div>

{/* Add file upload before the submit button */}
<div className="relative group mb-6">
  <input
    type="file"
    onChange={(e) => setSupportForm(prev => ({ ...prev, file: e.target.files?.[0] || null }))}
    className="w-full px-4 py-3 bg-purple-900/10 border border-purple-500/20 rounded-xl outline-none focus:border-purple-500 transition-colors duration-300 text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-500/20 file:text-purple-400 hover:file:bg-purple-500/30"
  />
  <label className="absolute -top-6 left-0 text-gray-400 text-sm">
    Attachment (optional)
  </label>
</div>
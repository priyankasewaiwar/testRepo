const FormEntry = () => {
	return (
		<div>
			<form>
				<lable for="itemId">Order ID</lable>
				<input type="number" id="itemId" />
				<label for="price">Price</label>
				<input type="number" id="price" />
				<label for="itemName">Item Name</label>
				<input type="text" id="itemName" />

				<label for="tableId"> Table</label>
				<select id="tableId">
					<option value="table1">Table 1</option>
					<option value="table2">Table 2</option>
					<option value="table3">Table 3</option>
				</select>
				<button type="submit" value="Submit">
					Submit
				</button>
			</form>
		</div>
	)
}

export default FormEntry

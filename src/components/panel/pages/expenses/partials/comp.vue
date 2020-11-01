<table class="md:w-full">
	<thead>
		<tr>
			<th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-700 tracking-wider">Parcela</th>
			<th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">Vencimento</th>
			<th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">Pagamento</th>
			<th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">Banco</th>
			<th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">Conta</th>
			<th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">Comprovante</th>
			<th class="px-6 py-3 border-b-2 border-gray-300 text-right text-sm leading-4 text-gray-700 tracking-wider">Valor (R$)</th>
			<th class="px-6 py-3 border-b-2 border-gray-300 text-right text-sm leading-4 text-gray-700 tracking-wider">Status</th>
		</tr>
	</thead>
	<tbody class="bg-white">
		<tr
			v-for="(item, index) in expense.installments"
			:key="index"
		>
			<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
				<div class="flex items-center">
					<div>
						<div class="text-sm leading-5 text-gray-800">
							{{ index + 1 }} / {{ expense.installments.length }}
						</div>
					</div>
				</div>
			</td>
			<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
				<AppDate
					:value="item.data_vencimento"
					readonly
				/>
			</td>
			<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500">
				<AppDate
					:value="item.data_pagamento"
					readonly
				/>
			</td>
			<td class="text-center px-6 py-3 whitespace-no-wrap border-b border-gray-500">
				<svg class="feather cursor-pointer w-8" @click.prevent="download(expense.anexo)">
					<use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
				</svg>
			</td>
			<td class="px-6 py-3 whitespace-no-wrap border-b text-right text-blue-900 border-gray-500 text-sm leading-5">
				<AppMoney
					:value="item.valor"
					readonly
				/>
			</td>
			<td class="px-6 py-3 whitespace-no-wrap border-b border-gray-500 text-right">
				<AppStatus :status="item.status" />
			</td>

		</tr>

	</tbody>
</table>
